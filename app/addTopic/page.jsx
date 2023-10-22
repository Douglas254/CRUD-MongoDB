import React from "react";

export default function AddTopic() {
  return (
    <form className="flex flex-col gap-3">
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button className="bg-green-500 text-white font-bold w-fit py-1 px-2 rounded-sm">Add Topic</button>
    </form>
  );
}
