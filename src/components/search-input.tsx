"use client";
import * as actions from "@/actions";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

export const SearchInput = () => {
  const serachParams = useSearchParams();
  return (
    <form action={actions.search}>
      <Input name="term" defaultValue={serachParams.get("term") ?? ""} />
    </form>
  );
};
