import React from "react";
import { Helmet } from "react-helmet";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Translation from "./pages/Translation/Translation";
import Webdevelopment from "./pages/Webdevelopment/Webdevelopment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lakaters | Arabic Translation services in Hyderabad</title>
        <meta
          name="description"
          content="Arabic Translation services in Hyderabad for your technical, legal, immigration and marketing content ✅ ATN-APTS accredited translators"
        />
        <link rel="canonical" href="http://lakaters.in" />
      </Helmet>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/translation" component={Translation} />
        <Route path="/webdevelopment" component={Webdevelopment} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
