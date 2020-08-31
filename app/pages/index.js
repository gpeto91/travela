import React, { useState } from "react";
import { withApollo } from '../libs/apollo';
import { useQuery } from '@apollo/react-hooks';
import styled from "styled-components";

import { GET_TRAVELS } from "../graphql/getTravel";

import AppForm from "../components/Form";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Counter = styled.p`
    font-family: 'righteousregular';
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    margin-bottom: 0;
    padding-bottom: 15px;
`;

const CounterHighlight = styled.span`
    font-size: 40px;
    text-shadow: 4px 4px 1px #EC9A29;
    display: inline-block;
    margin: 0 10px;
`;

const Home = () => {
    const { loading, error, data } = useQuery(GET_TRAVELS);

    return (
        <Layout>
            <div style={{minHeight: "100vh", backgroundColor: "#4F6D7A", color: "#FFFAFB", display: "flex", flexDirection: "column"}}>
                <h1 style={{
                    fontFamily: "righteousregular",
                    fontSize: 70,
                    textShadow: "4px 4px 1px #EC9A29",
                    letterSpacing: 5,
                    textAlign: "center",
                    margin: 0,
                    marginBottom: 25
                }}>Travel A</h1>

                <p style={{fontFamily: "montserrat_alternatesregular", width: "70%", maxWidth: 600, margin: "0 auto", textAlign: "center"}}>Welcome to the best Travel Agency in the world! The only one that can take you to Mars with an one-way trip for the promotional price of <span style={{color: "#EC9A29"}}>$1.5 millions</span>. Book now from anywhere to everywhere!</p>

                <AppForm />

                {!loading && (
                    <Counter>
                        there are
                        <CounterHighlight>{data.travels}</CounterHighlight> travels booked
                    </Counter>)}

                <Footer />
            </div>
        </Layout>
    )
};

export default withApollo({ ssr: true })(Home);
