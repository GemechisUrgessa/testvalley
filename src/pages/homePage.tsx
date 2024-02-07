/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import SliderComponent from "../components/slider";
import apiCall from "../services/apiCall";
import IconList from "../components/iconList";
import ProductList from "../components/productList";
const HomePage = () => {
  const [mainBanner, setMainBanner] = React.useState([]);
  const [iconList, setIconList] = React.useState([]);
  const [mainBannerError, setMainBannerError] = React.useState("");
  const [iconListError, setIconListError] = React.useState("");
  const [hotDeals, setHotDeals] = React.useState([]);
  const [hotDealsError, setHotDealsError] = React.useState("");
  const [rest, setRest] = React.useState([]);
  const [restError, setRestError] = React.useState("");

  const fetchMainBanner = async () => {
    try {
      const data = await apiCall.getMainBanner();
      if (data) {
        setMainBanner(data);
      } else {
        setMainBannerError("Error fetching data");
      }
    } catch (error) {
      setMainBannerError("Error fetching data");
    }
  };
  const fetchIconList = async () => {
    try {
      const data = await apiCall.getMainShortcut();
      if (data) {
        setIconList(data);
      } else {
        setIconListError("Error fetching data");
      }
    } catch (error) {
      setIconListError("Error fetching data");
    }
  };
  const fetchHotDeals = async () => {
    try {
      const data = await apiCall.getCollections();
      console.log(data);
      if (data) {
        // Filter data with title "HOT DEALS"
        const hotDealsData = data.items.filter(
          (item: any) => item.title === "HOT DEAL"
        );
        console.log(hotDealsData);
        setHotDeals(hotDealsData);
      } else {
        setHotDealsError("Error fetching data");
      }
    } catch (error) {
      setHotDealsError("Error fetching data");
    }
  };

  const fetchRest = async () => {
    try {
      const data = await apiCall.getCollections();
      console.log(data);
      if (data) {
        // Filter data with title "REST"
        const restData = data.items.filter(
          (item: any) =>
            item.title !== "HOT DEAL" &&
            item.title !== "" &&
            item.subtitle !== "" &&
            item.type === "SINGLE" &&
            item.viewType === "TILE"
        );
        console.log(restData);
        setRest(restData);
      } else {
        setRestError("Error fetching data");
      }
    } catch (error) {
      setRestError("Error fetching data");
    }
  };
  useEffect(() => {
    fetchMainBanner().then(() => {
      fetchIconList().then(() => {
        fetchHotDeals().then(() => {
          fetchRest();
        });
      });
    });
  }, []);

  if (mainBannerError) {
    return (
      <div className="h-100 d-flex align-items-center justify-content-center text-red">
        {mainBannerError}
      </div>
    );
  }
  if (iconListError) {
    return (
      <div className="h-100 d-flex align-items-center justify-content-center text-red">
        {iconListError}
      </div>
    );
  }
  if (hotDealsError) {
    return (
      <div className="h-100 d-flex align-items-center justify-content-center text-red">
        {hotDealsError}
      </div>
    );
  }
  if (restError) {
    return (
      <div className="h-100 d-flex align-items-center justify-content-center text-red">
        {restError}
      </div>
    );
  }

  return (
    <div className="home">
      <SliderComponent mainBanner={mainBanner} />
      <IconList items={iconList} />
      <ProductList products={hotDeals} />
      {rest.map((product: any) => (
        <ProductList key={product.id} products={[product]} />
      ))}
    </div>
  );
};

export default HomePage;
