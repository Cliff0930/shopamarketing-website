import { renderOgImage, size, contentType } from "./og-image";

export const alt = "Shopa Marketing — marketing that grows your business";
export { size, contentType };

export default function TwitterImage() {
  return renderOgImage();
}
