import { Component } from 'react';
import { ModalContainer } from 'components/Modal/Modal';
import { Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = { isModalOpen: false };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { smallImg, largeImg } = this.props;
    return (
      <div>
        <Image src={smallImg} alt="pic" onClick={this.openModal} />;
        <ModalContainer
          url={largeImg}
          isModalOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
}
