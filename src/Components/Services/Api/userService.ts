import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newUser) => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]); // تحديث الكاش بعد الإضافة
    },
  });
};
