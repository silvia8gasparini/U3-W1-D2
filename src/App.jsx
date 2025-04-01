import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./components/CustomNavbar";
import Welcome from "./components/Welcome";
import Books from "./components/Books";
import Footer from "./components/Footer";
import books from "./data/books/history.json"; // Assicurati che il percorso sia corretto

const App = () => {
  return (
    <>
      <CustomNavbar />
      <Welcome />
      <Books books={books} />
      <Footer />
    </>
  );
};

export default App;
