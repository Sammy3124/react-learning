import React from "react";
import styles from "./layout.css"

interface ILayoutProps { // Интерфейс можно воспринимать как контракт или декларацию, которые накладывают ограничения на js-объект
  children?: React.ReactNode; // *?: - означает, что параметр опциональный
}

// { children }: ILayoutProps => children: React.ReactNode?

export function Layout({ children }: ILayoutProps) { // Почему нельзя написать просто children: React.ReactNode? - может потому, что в Layout могут ничего не передать?
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}