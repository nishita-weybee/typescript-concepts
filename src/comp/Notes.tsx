import React, { useRef } from "react";
import { type color } from "../libs/types";

// // interface
interface egInterface {
  desc: "Example of Type";
}
// // Type
type egType = "Example of Type";

// // Intersection, Extends, Component Props, Generics
type ButtonProps<T> = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
  curColor: T;
  colorArr: T[];
  color?: color;
};

type SuperButtonProps<T> = ButtonProps<T> & {
  size: "md" | "lg";
};
//   interface SuperButtonProps extends ButtonProps {
//     size: "md" | "lg";
//   }

const Notes = <T,>({
  type,
  name,
  variant,
  curColor,
  colorArr,
  ...rest
}: ButtonProps<T>) => {
  // // Drawback : You can only describe objects with interface
  type URL = string;
  const url: URL = "https://localhost:3000";

  interface URL2 {
    url: string;
  }
  const url2: URL2 = { url: "https://localhost:3000" };

  // Ref Types
  const ref = useRef<HTMLButtonElement>(null);

  // // TypeScript Utility Types
  type User = {
    name: string;
    id: Number;
    age: Number;
    //   style: React.CSSProperties;
    //   children: React.ReactNode;
  };

  // Omit
  type Guest = Omit<User, "name">;
  // Pick
  type Newuser = Pick<User, "age">;

  // ReturnType, Parameters
  function logAndReturn<T extends (...args: any[]) => any>(
    func: T,
    ...args: Parameters<T>
  ): ReturnType<T> {
    const result = func(...args);
    console.log(`Function executed with args: ${args}`);
    return result;
  }

  const concatenatedString = logAndReturn(
    (a: string, b: string) => a + b,
    "Hello",
    " TypeScript"
  );
  // Outputs: Function executed with args: Hello, TypeScript
  // concatenatedString is string ("Hello TypeScript")

  // Record
  const nameAgeMap: Record<string, number> = {
    Alice: 21,
    Bob: 25,
  };
  //   Record<string, number> is equivalent to { [key: string]: number }

  //   Primitive
  type Primitive = string | number | boolean;
  const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type

  // as Type Assertion
  type ButtonColor = "red" | "green" | "blue";
  const prevColor = localStorage.getItem("buttonColor") as ButtonColor;

  // const btnTextOpt: readonly string[] = ["Click Me!", "Click Me Again", "Click Me More"];
  const btnTextOpt = ["Click Me!", "Click Me Again", "Click Me More"] as const;

  // Generics
  const convertToArray = <T,>(value: T): T[] => {
    return [value];
  };
  convertToArray(5);
  convertToArray("Hello");
  convertToArray(true);

  // keyof with explicit keys
  interface Person {
    name: string;
    age: number;
  }
  // `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }

  let person = {
    name: "Max",
    age: 27,
  };
  printPersonProperty(person, "name"); // Printing person property name: "Max"

  return (
    <button ref={ref} type={type} name={name} {...rest}>
      {btnTextOpt.map((btn) => {
        return btn;
      })}
      Click Me! {variant}
      <>{curColor}</>
      <>
        {colorArr.map((col) => {
          return col;
        })}
      </>
    </button>
  );
};

export default Notes;

// // Intersection (&) --> To combine type with Component Props
// Using Interface --> We have "extends" instead of &

// // Component Props (for html elements) --> React.ComponentPropsWithoutRef<"button"> or React.ComponentPropsWithoutRef<"button">

// // "as const" is used to make it readonly

// // Generics --> Making the type more general

// // Definitely Typed is a project that provides a central repository of TypeScript definitions for NPM packages which do not have types.
// npm install --save-dev @types/jquery

// //  TypeScript Utility Types
// Readonly
// Parameters
// ReturnType
// Exclude removes types from a union.
// Record is a shortcut to defining an object type with a specific key type and value type.
// Required changes all the properties in an object to be required.
// Partial changes all the properties in an object to be optional.
// Omit
// Pick

// Refer them
// Zod
// ts-reset library
