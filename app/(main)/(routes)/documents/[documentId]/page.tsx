"use client";

import { Cover } from "@/components/cover";
import { Toolbar } from "@/components/toolbar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface DcoumentPageIdProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentPageId = ({ params }: DcoumentPageIdProps) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  const update = useMutation(api.documents.update);

  if (document === undefined) {
    return <div>Loading...</div>;
  }

  if (document === null) {
    return <div>Not found!</div>;
  }

  return (
    <div className="pb-40">
      <Cover url={document.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar initialData={document} />
        {/*  // TODO editor */}
      </div>
    </div>
  );
};

export default DocumentPageId;
