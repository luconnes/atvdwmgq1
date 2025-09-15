"use client";

import { addTask, deleteTask, getTasks, updateTask } from "@/api";
import { CardTask } from "@/components/CardTask";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useState } from "react";

export default function TaskList() {
  const [description, setDescription] = useState("");
  const queryClient = useQueryClient();
  const { data, isFetching, error, isPending } = useQuery({
    queryKey: ["todos"],
    queryFn: getTasks,
  });

  const addMutation = useMutation({
    mutationFn: addTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      setDescription("");
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  if (isFetching) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!data) {
    return <p>No data available</p>;
  }
  return (
    <div>
      <h1>Task List</h1>
      <p>
        <input
          placeholder="Add a task"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={() => addMutation.mutate({ description })}>Add</button>
      </p>
      <hr />
      {data.results.map((task) => (
        <CardTask
          key={task.objectId}
          task={task}
          onDelete={deleteMutation.mutate}
          onCheck={updateMutation.mutate}
        />
      ))}
      {isPending && <p>Pending...</p>}
      <hr />
      <Link href="/">Home</Link>
    </div>
  );
}