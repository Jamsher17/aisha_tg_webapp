import Image from "next/image";
import { cartItem } from "./MenuPage";
import { menuItem } from "@/app/components/DummyData";

const MenuItem = ({
  item,
  quantity,
  userCart,
  setUserCart,
}: {
  item: menuItem;
  quantity: number;
  userCart: cartItem[];
  setUserCart: React.Dispatch<React.SetStateAction<cartItem[]>>;
}) => {
  const increaseQuantity = (id: string) => {
    const existingItem = userCart.find((item) => item.itemId == id);
    if (existingItem) {
      let newCart = userCart.map((item) =>
        item.itemId == id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setUserCart(newCart);
    } else {
      setUserCart([...userCart, { itemId: id, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (id: string) => {
    setUserCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.itemId === id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          return prevCart.filter((item) => item.itemId !== id);
        }
        return prevCart.map((item) =>
          item.itemId === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart;
    });
  };

  return (
    <div className="flex bg-appGrayBg rounded-[10px] mb-4 mr-3 h-24">
      <div className="w-24 h-full relative overflow-hidden shrink-0 rounded-l-[10px]">
        <Image
          src={item.ImageName}
          alt="Picture"
          className="object-cover w-full h-full"
        />
        {quantity > 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-2xl text-white font-bold bg-black bg-opacity-50">
            {quantity}
          </div>
        )}
      </div>

      <div className="ml-2 shrink-1 flex flex-col justify-between">
        <div>
          <p className="text-lg font-bold">{item.name}</p>
          <p className="text-xs">{item.description}</p>
        </div>
        <div>
          <p className="text-sm font-bold">{item.price}</p>
        </div>
      </div>

      <div
        style={{ fontFamily: "Arial, sans-serif" }}
        className="shrink-0 text-3xl flex flex-col justify-center items-center w-16 h-full"
      >
        <button
          onClick={() => increaseQuantity(item.id)}
          className="w-full grow border-l-2"
        >
          +
        </button>
        <hr className="w-full border-3 border-black" />
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="w-full grow border-l-2"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
