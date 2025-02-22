import { RouterProvider } from "react-router-dom"
import { routes } from "./routes/Routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";
// QueryClient هو المسئول عن تخزين الكاش وإدارته.
// QueryClientProvider هو اللي بيخلّي كل الكومبوننتات تقدر تستخدم TanStack Query.

const queryClient = new QueryClient(); //**  Create Cashing for performance

function App() {

  return (
    <>
    
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>

    </>
  )
}

export default App
