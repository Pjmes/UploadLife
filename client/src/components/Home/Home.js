import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, IconButton } from "@material-ui/core";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyle from "./styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const [searchValue, setSearchValue] = useState(0);
  const dispatch = useDispatch();
  const style = useStyle();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Container className={style.appBarSearch}>
          <InputBase
            onChange={(e) => setSearchValue(e.target.value)}
            name="searchTag"
            className={style.searchBtn}
          />
          <IconButton
            onClick={() => dispatch(getPosts(searchValue))}
            className={style.inputSearch}
          >
            <SearchIcon />
          </IconButton>
        </Container>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
