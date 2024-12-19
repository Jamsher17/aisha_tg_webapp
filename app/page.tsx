import Header from "./components/Header";
import MenuPage from "./screens/menu/MenuPage";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="px-6">
        <MenuPage />
      </main>
    </div>
  );
}
