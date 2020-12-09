import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import Card from '../../../components/Card/Card.component';

const videoMock = {
  key: 'key',
  videoId: 'key',
  title: 'Video title',
  description: 'this is a description',
  imageUrl: '',
  isFavorit: 'false',
};

describe('Card component', () => {
  it('Displays the card with the video information', () => {
    const onClick = jest.fn();

    render(
      <HashRouter>
        <Card
          key={videoMock.videoId}
          videoId={videoMock.videoId}
          title={videoMock.title}
          description={videoMock.description}
          imageUrl={videoMock.imageUrl}
          onClick={onClick}
          isFavorit={videoMock}
        />
      </HashRouter>
    );
    expect(screen.getByText('Video title')).toBeTruthy();
    expect(screen.getByText('this is a description')).toBeTruthy();
  });

  it('Clicks on card and fires event', () => {
    const onClick = jest.fn();
    render(
      <HashRouter>
        <Card
          key={videoMock.videoId}
          videoId={videoMock.videoId}
          title={videoMock.title}
          description={videoMock.description}
          imageUrl={videoMock.imageUrl}
          onClick={onClick}
          isFavorit={videoMock}
        />
      </HashRouter>
    );
    const card = screen.getByRole('heading');
    fireEvent.click(card);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
