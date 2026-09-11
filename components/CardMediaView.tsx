import Image from "next/image";
import FlowChips from "./FlowChips";
import type { CardMedia } from "@/lib/content";

export default function CardMediaView({ media }: { media: CardMedia }) {
  switch (media.kind) {
    case "image":
      return (
        <Image
          className={media.crop === "lookup-card" ? "media-img crop-lookup" : "media-img"}
          src={media.src}
          alt={media.alt}
          width={1280}
          height={860}
          sizes="(max-width: 1023px) 100vw, 380px"
        />
      );
    case "email":
      return (
        <div className="email-mock">
          <p className="email-subject">{media.subject}</p>
          <p className="email-body">{media.body}</p>
        </div>
      );
    case "flow":
      return <FlowChips steps={media.steps} className="card-flow" />;
  }
}
