import { useState, useCallback } from "react";

function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return { value, toggle, setTrue, setFalse };
}

export const randomArrayValues = (array, count) => {
  return Array.from(
    { length: count },
    () => array[Math.floor(Math.random() * array.length)]
  );
};

export function DynamicComponent() {
  const location = useLocation();
}

// Footer.jsx Functions
export function ArrayIterator({ items = [] }) {
  return (
    <>
      {items.map((item) => (
        <div className="footer-pages" key={item.id}>
          {item.name}
        </div>
      ))}
    </>
  );
}

export function FacebookImgSrcHover() {
  const { value: isHovered, toggle, setTrue, setFalse } = useBoolean();
  return (
    <img
      onMouseEnter={setTrue} // Set to true when mouse enters
      onMouseLeave={setFalse} // Set to false when mouse leaves
      src={
        isHovered
          ? "public/assets/img/Other-img/Facebook-Logo-Hover.png"
          : "public/assets/img/Other-img/Facebook-Logo.png"
      }
      alt=""
      style={{
        height: "60px",
        borderTopLeftRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderRightWidth: "0px",
        borderColor: "black",
        borderStyle: "solid",
        cursor: "pointer",
      }}
    />
  );
}

export function RappiImgSrcHover() {
  const { value: isHovered, setTrue, setFalse } = useBoolean();
  return (
    <img
      onMouseEnter={setTrue} // Set to true when mouse enters
      onMouseLeave={setFalse} // Set to false when mouse leave
      src={
        isHovered
          ? "public/assets/img/Other-img/Rappi-Logo-Hover.png"
          : "public/assets/img/Other-img/Rappi-Logo.png"
      }
      alt=""
      style={{
        height: "60px",
        borderTopRightRadius: "15px",
        borderBottomRightRadius: "15px",
        borderLeftWidth: "0px",
        borderColor: "black",
        borderStyle: "solid",
        cursor: "pointer",
      }}
    />
  );
}
