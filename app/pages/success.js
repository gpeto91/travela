import React, {useEffect} from "react";
import { withApollo } from "../libs/apollo";
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import styled from "styled-components";

import Layout from "../components/Layout";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #4F6D7A;
    height: 100vh;
`;

const Title = styled.h1`
    font-family: "righteousregular";
    font-size: 70px;
    text-shadow: 4px 4px 1px #EC9A29;
    letter-spacing: 5px;
    text-align: center;
    margin: 0;
    margin-bottom: 25px;
    color: #FFFAFB;
`;

const Text = styled.p`
    font-family: "montserrat_alternatesregular";
    width: 70%;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    color: #FFFAFB;
`;

const Success = (props) => {
    useEffect(() => {
        console.log(props);
    }, []);

    return(
        <Layout>
            <Page>
                <Title>Booked!</Title>

                <Text>Now all you have to do is wait for the day and we'll take care of the rest</Text>

                <Link href="/">
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{marginTop: 40}}
                    >Back to home</Button>
                </Link>
            </Page>
        </Layout>
    )
}

export default withApollo({ ssr: true })(Success);
