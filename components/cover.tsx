"use client";

import { api } from "@/convex/_generated/api";
import { useCoverImage } from "@/hooks/useCoverImage";
import { useMutation } from "convex/react";
import { useParams } from "next/navigation";

interface CoverImageProps {
  url?: string;
  preview?: boolean;
}

export const Cover = ({ url, preview }: CoverImageProps) => {
  const params = useParams();
  const coverImage = useCoverImage();
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  return <div>Document Page</div>;
};
