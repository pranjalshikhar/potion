"use client";

import { Cover } from "@/components/cover";
import { Toolbar } from "@/components/toolbar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const Editor = useMemo(
    () => dynamic(() => import("@/components/editor"), { ssr: false }),
    []
  );

  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  console.clear();
  console.log(document);

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: params.documentId,
      content,
    });
  };

  return (
    <div className="pb-40">
      <Cover preview url={document?.coverImage} />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
        <Toolbar
          preview
          //@ts-ignore
          initialData={document}
        />
        <Editor
          editable={false}
          onChange={onChange}
          initialContent={document?.content}
        />
      </div>
    </div>
  );
};

export default DocumentIdPage;
