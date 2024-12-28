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
    <div className="flex bg-gray-200 rounded-md mb-4 text-black items-center mr-3">
      <div className="w-36 h-24 ml-1 relative flex items-center justify-center">
        <Image
          src={item.ImageName}
          alt="Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        {quantity > 0 && (
          <div className="absolute inset-0 flex items-center justify-center text-2xl text-white font-bold bg-black bg-opacity-50 rounded-lg">
            {quantity}
          </div>
        )}
      </div>

      <div className="my-2 ml-2 border-r-2 border-current">
        <p className="text-lg font-bold">{item.name}</p>
        <p className="text-sm text-slate-600">{item.description}</p>
        <div className="flex justify-end px-4">
          <p className="text-sm font-bold">{item.price}</p>
        </div>
      </div>

      <div className="text-3xl flex flex-col justify-around">
        <button
          onClick={() => increaseQuantity(item.id)}
          className="grow pl-3 p-2"
        >
          +
        </button>
        <hr className="border-1 border-current" />
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="grow pl-3 p-2"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
