/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Layout from "../../Layout/index";
import Profile from "./Profile/index";
import SearchingBar from "../../SearchingBar/index";
import Cards from "../../Cards/index";
import useGetCardInShared from "../../../hooks/useGetCardsInShared";
import { divCss } from "./styles";

const SharedPage = () => {
  const { cardDetail } = useGetCardInShared();

  return (
    <Layout
      children={[
        <Profile />,
        <div css={divCss}>
          <SearchingBar />,
          <Cards items={cardDetail} />
        </div>,
      ]}
    />
  );
};
export default SharedPage;
