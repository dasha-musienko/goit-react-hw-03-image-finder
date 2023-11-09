import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { GlobalStyle } from './GlobalStyles/GlobalStyles';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Layout } from './Layout/Layout.styled';
import { Loader } from './Loader/Loader';
import { fetchImg } from './api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    loading: false,
    error: false,
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.setState({
      page: 1,
      query: evt.target.query.value.trim(),
      images: [],
    });

    evt.target.reset();
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      try {
        this.setState({ loading: true });
        const data = await fetchImg(this.state.query, this.state.page);
        const { totalHits, hits } = data;
        if (totalHits === 0) {
          toast.error(`There are no pictures for your search`);
          return;
        }

        this.setState({
          images: [...this.state.images, ...hits],
        });
      } catch (error) {
        toast.error(`Try to reload page`);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} />
        )}
        {this.state.loading && <Loader />}

        {this.state.images.length > 0 && (
          <Button onClick={this.handleLoadMore} />
        )}
        <GlobalStyle />
        <Toaster position="top-right" />
      </Layout>
    );
  }
}
