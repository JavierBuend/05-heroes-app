import { Heart, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CustomJumbotron } from "@/components/custom/CustomJumbotron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { HeroGrid } from "@/heroes/components/HeroGrid";
import { useState } from "react";
import { CustomPagination } from "@/components/custom/CustomPagination";

export const HomePage = () => {
  const [activeTab, setActiveTab] = useState<
    "all" | "Favorites" | "Heroes" | "Villains"
  >("all");
  return (
    <>
      <>
        <CustomJumbotron
          title="Universo de superheroes"
          description="Descubre, explora y administra superheroes y villanos"
        />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Controls */}

        {/* Advanced Filters */}

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Characters (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab("Favorites")}
            >
              <Heart className="h-4 w-4" />
              Favorites (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("Heroes")}>
              Heroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("Villains")}
            >
              Villains (2)
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            {/* mostrar todos los personajes */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="Favorites">
            {/* mostrar todos los Favoritos */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="Heroes">
            {/* mostrar todos los Heroes */}
            <HeroGrid />
          </TabsContent>
          <TabsContent value="Villains">
            {/* mostrar todos los villanos */}
            <HeroGrid />
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={8} />
      </>
    </>
  );
};
