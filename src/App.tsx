import React from "react";
import { Layout } from "./shared/Layout";
import './main.global.css';
import { Header } from "./shared/Header";
import { Content } from "./shared/Content";

export function App() {
  return (
    <Layout>
      <Header />
      <Content>
        content
      </Content>
    </Layout>
  );
}