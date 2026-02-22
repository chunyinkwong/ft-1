<script lang="ts">
    import { evaluate } from "../lib/engine";
    // Use invisible character to prevent the display from collapsing when empty
    let expr = "‎";
    let result: number | null = null;

    function press(key: string) {
        if (key === "=") {
            try {
                result = evaluate(expr);
            } catch (e) {
                result = NaN;
            }
        } else if (key === "C") {
            expr = "‎ ";
            result = null;
        } else {
            expr += key;
        }
    }
</script>

<div class="calc">
    <div data-testid="display" class="display">
        {expr}
        {result !== null ? `= ${result}` : ""}
    </div>
    <div class="keys">
        {#each ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"] as k}
            <button on:click={() => press(k)}>{k}</button>
        {/each}
    </div>
</div>

<style lang="less">
    .calc {
        max-width: 320px;
        display: grid;
        grid-template-rows: auto 1fr;
        gap: 8px;

        .display {
            grid-column: 1 / -1;
            font-family: monospace;
            padding: 8px;
            border: 4px solid var(--accent);
            border-radius: 4px;
            font-size: 1.5rem;
        }

        .keys {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;

            button {
                cursor: pointer;
                padding: 12px;
                font-size: 1.2rem;
                border-radius: 4px;
            }
            button {
                &:nth-child(17) {
                    background: #ff6b6b;
                    color: #fff;
                    font-weight: 600;
                }
            }
        }
    }
</style>
