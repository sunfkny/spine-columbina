import { SpinePlayer } from "@esotericsoftware/spine-player";
import "@esotericsoftware/spine-player/dist/spine-player.css";

const player = new SpinePlayer("player-container", {
  jsonUrl: "/shaonv.json",
  atlasUrl: "/shaonv.atlas",
  preserveDrawingBuffer: false,
  premultipliedAlpha: false,
  alpha: true,
  showControls: false,
  success: () => {
    player.setAnimation("a2b2a", true);
  },
  error: (player, msg) => {
    console.error({ player, msg });
  },
});
