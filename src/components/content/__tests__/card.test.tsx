import {fireEvent, render} from '@testing-library/react';
import Card from '../card';

describe('Card', () => {
  describe('handleClaps', () => {

    it('should increment claps by 1 when clicked', () => {
      const {getByTestId} = render(<Card id={5} title='None' description='None' image='None' date='DD-MM-YYYY' readingTime='2 mins'/>);
      const clapButton = getByTestId('clap-button');
      const clapCount = getByTestId('clap-count');
      fireEvent.click(clapButton);
      expect(clapCount.textContent).toBe('1');
    });

    it('should reset clap when clicked twice', () => {
      const {getByTestId} = render(<Card id={4} title='None' description='None' image='None' date='DD-MM-YYYY' readingTime='2 mins'/>);
      const clapButton = getByTestId('clap-button');
      const clapCount = getByTestId('clap-count');
      fireEvent.click(clapButton);
      fireEvent.click(clapButton);
      expect(clapCount.textContent).toBe('0');
    });

  });

  describe('Heart',()=>{
    describe('handleHeart',()=>{

      it('should display black heart when component renders',()=>{
        const {getByTestId} = render(<Card id={1} title='None' description='None' image='None' date='DD-MM-YYYY' readingTime='2 mins' />);
        const heartButton = getByTestId('black-heart');
        expect(heartButton).toBeInTheDocument();
      });

      it('should change heart color to red when clicked',()=>{
        const {getByTestId} = render(<Card id={2} title='None' description='None' image='None' date='DD-MM-YYYY' readingTime='2 mins'/>);
        const heartButton = getByTestId('black-heart');
        fireEvent.click(heartButton);
        const redHeart = getByTestId('red-heart');
        expect(redHeart).toBeInTheDocument();
      });

      it('should change heart color to black when clicked twice',()=>{
        const {getByTestId} = render(<Card id={3} title='None' description='None' image='None' date='DD-MM-YYYY' readingTime='2 mins'/>);
        const heartButton = getByTestId('black-heart');
        fireEvent.click(heartButton);
        const redHeart = getByTestId('red-heart');
        fireEvent.click(redHeart);
        expect(heartButton).toBeInTheDocument();
      });
    });
  });

});
