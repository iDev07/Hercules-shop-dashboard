import * as React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./../content/home/Home";
import { About } from "./../content/about/About";
import { Contact } from "./../content/contact/Contact";
import { SiteMaster } from "./../content/siteMaster/SiteMaster";
import Main from "./../content/main/Main";
import Product from "../content/product/Product";
import Convert from "../content/convert/Convert";
import Client from "../content/client/Client";

export const Category = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/main" element={<Main />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/convert" element={<Convert />} />
        <Route path="/siteMaster" element={<SiteMaster />} />
      </Routes>
    </div>
  );
};
