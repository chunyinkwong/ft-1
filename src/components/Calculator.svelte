<script lang="ts">
    import { evaluate } from "../lib/engine";
    let expr = "";
    let result: number | null = null;

    function press(key: string) {
        if (key === "=") {
            try {
                result = evaluate(expr);
            } catch (e) {
                result = NaN;
            }
        } else if (key === "C") {
            expr = "";
            result = null;
        } else {
            expr += key;
        }
    }
</script>

<div class="calc">
    <div data-testid="display" class="display">{expr} {result !== null ? `= ${result}` : ""}</div>
    <div class="keys">
        {#each ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"] as k}
            <button on:click={() => press(k)}>{k}</button>
        {/each}
    </div>
</div>

<style lang="less">
    .calc {
        width: min(100vw, 360px);
        .display {
            grid-column: 1 / -1;
        }
        .keys {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 6px;
        }
        display: grid;
        grid-template-rows: auto 1fr;
        gap: 8px;
    }
</style>
