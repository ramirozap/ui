import style, { css } from 'styled-components';
import {
  grayShadow, grayLighter,
} from '../style/colors';

export const wrapper = style.div`
  outline: 0;
  :focus {
    outline: 0
  }
  max-height: 40px;
`;


export const select = css`
    margin-top: 15px;
    position: fixed;
    z-index: 1000;
    box-sizing: content-box;
    border: 1px solid ${grayLighter};
    box-shadow: 0 4px 30px 0 ${grayShadow};
    display: ${props => (props.isOpen ? 'initial' : 'none')};
    min-width: 150px;
    width: auto;
    background-color: #ffffff;
`;

export const SelectItems = style.ul`
    max-height: 235px;
    overflow-y: auto;
    padding-bottom: 10px;
    padding-top: 10px;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    margin-block-start: 5px;
    margin-block-end: 5px;
    padding-inline-start: 0px;
`;


export const selectArrow = style.div`
    background-color: #fff;
    border-left: 1px solid #ced7df;
    border-radius: 2px 0 0 0;
    border-top: 1px solid #ced7df;
    display: ${props => (props.isOpen ? 'inline-block' : 'none')};
    height: 10px;
    left: 50%;
    margin-left: ${props => (props.right ? '80px' : '10px')};
    position: absolute;
    width: 10px;
    z-index: 1;
    transform: ${props => (props.bottom ? 'rotate(225deg)' : 'rotate(45deg)')};
    bottom: ${props => (props.bottom ? '-5px' : 'auto')};
    top: ${props => (props.bottom ? 'auto' : '3px')};
    position: relative;
`;
