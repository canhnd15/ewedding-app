import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Guests from "./pages/Guests";
import InvitationCard from "./pages/InvitationCard";
import AppLayout from "./components/AppLayout";
import InvitationMoney from "./pages/InvitationMoney";
import Payment from "./pages/Payment";
import Services from "./pages/Services";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to={"/guests"} />} />
            <Route path="guests" element={<Guests />} />
            <Route path="invitation-card" element={<InvitationCard />} />
            <Route path="invitation-money" element={<InvitationMoney />} />
            <Route path="payment" element={<Payment />} />
            <Route path="services" element={<Services />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
