<script lang="ts">
  let canvas: HTMLCanvasElement;

  let containerWidth: number;
  let containerHeight: number;

  $: if (canvas) canvas.width = containerWidth;
  $: if (canvas) canvas.height = containerHeight;
</script>

<div class="flex flex-grow" bind:clientWidth={containerWidth} bind:clientHeight={containerHeight}>
  <canvas bind:this={canvas} />
</div>
