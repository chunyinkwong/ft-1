<script lang="ts">
    const themes = ["light", "dark", "system"] as const;
    const themeEmojis: Record<(typeof themes)[number], string> = {
        light: "☀️",
        dark: "🌙",
        system: "💻",
    };
    type Theme = (typeof themes)[number];
    let systemTheme: 'light' | 'dark' = "light";
    let effectiveTheme: 'light' | 'dark';
    let currentTheme: Theme = "system";

    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored && themes.includes(stored)) {
        currentTheme = stored;
        document.documentElement.setAttribute("data-theme", currentTheme);
    }

    function toggle() {
        const i = themes.indexOf(currentTheme);
        currentTheme = themes[(i + 1) % themes.length];
    }

    if (window.matchMedia) {
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        systemTheme = mq.matches ? "dark" : "light";

        mq.addEventListener?.("change", (e) => {
            systemTheme = e.matches ? "dark" : "light";
        });
    }

    $: effectiveTheme = (currentTheme === "system" ? systemTheme : currentTheme);
    $: document.documentElement.setAttribute("data-theme", effectiveTheme);
    $: localStorage.setItem("theme", currentTheme);
</script>

<button on:click={toggle}>{themeEmojis[currentTheme]}</button>

<style lang="less">
    button {
        position: fixed;
        top: 1rem;
        right: 1rem;
    }
</style>
