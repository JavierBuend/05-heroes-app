import { AdminPage } from "@/admin/pages/AdminPage";
import { HomePage } from "@/heroes/pages/home/HomePage";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
// import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { createBrowserRouter } from "react-router";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayouts } from "@/admin/Layouts/AdminLayouts";
import { lazy } from "react";

const SearchPage=lazy(()=> import('@/heroes/pages/search/SearchPage'));

export const appRouter = createBrowserRouter([
//Cuando son rutas hijas no se pone el primer "/"
  {
    path:"/",
    element: <HeroesLayout/>,
    children: [  
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "heroes/1",
    element: <HeroPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
],
  },
  {
    path: "/admin",
    element: <AdminLayouts />,
    children:[
      {
      index: true,
      element: <AdminPage/>
    }
    ]
  },
]);
