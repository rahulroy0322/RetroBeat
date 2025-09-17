import { forwardRef, type AudioHTMLAttributes } from "react";
import classes from "./audio.module.css";


const PlayerAudioUI = forwardRef<
  HTMLAudioElement,
  AudioHTMLAttributes<HTMLAudioElement>
>(({ className, ...props }, ref) => (
  <audio className={`${classes} ${className}`} {...props} ref={ref} />
));

export default PlayerAudioUI;
