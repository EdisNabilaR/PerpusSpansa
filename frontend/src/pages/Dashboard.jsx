import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";
import Layout from "./Layout";


const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError, user } = useSelector((state => state.auth));
  
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);


  return (
    <Layout>
      <h1 className="text-white text-xl">Dashboard</h1>
      <p className="text-white">Welcome back <strong>{user && user.name}</strong></p>
    </Layout>
  );
};

export default Dashboard;