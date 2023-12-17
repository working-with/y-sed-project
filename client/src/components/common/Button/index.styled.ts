import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantCSS;
  shape?: keyof typeof shapeCSS;
}

export const variantCSS = {
  red: css`
    background-color: ${({ theme }) => theme.PALETTE.red[400]};
    color: ${({ theme }) => theme.PALETTE.white};
  `,
  orange: css`
    background-color: ${({ theme }) => theme.PALETTE.orange[400]};
    color: ${({ theme }) => theme.PALETTE.white};
  `,
  green: css`
    background-color: ${({ theme }) => theme.PALETTE.green[400]};
    color: ${({ theme }) => theme.PALETTE.white};
  `,
  blue: css`
    background-color: ${({ theme }) => theme.PALETTE.blue[400]};
    color: ${({ theme }) => theme.PALETTE.white};
  `,
};

export const shapeCSS = {
  red: css`
    border: 10px solid ${({ theme }) => theme.PALETTE.red[400]};
    color: ${({ theme }) => theme.PALETTE.red[400]};
    background-color: ${({ theme }) => theme.PALETTE.white};
  `,
  orange: css`
    border: 10px solid ${({ theme }) => theme.PALETTE.orange[400]};
    color: ${({ theme }) => theme.PALETTE.orange[400]};
    background-color: ${({ theme }) => theme.PALETTE.white};
  `,
  green: css`
    border: 10px solid ${({ theme }) => theme.PALETTE.green[400]};
    color: ${({ theme }) => theme.PALETTE.green[400]};
    background-color: ${({ theme }) => theme.PALETTE.white};
  `,
  blue: css`
    border: 10px solid ${({ theme }) => theme.PALETTE.blue[400]};
    color: ${({ theme }) => theme.PALETTE.blue[400]};
    background-color: ${({ theme }) => theme.PALETTE.white};
  `,
};

export const Button = styled.button<ButtonProps>`
  width: 11rem;
  height: 5.5rem;
  font-size: 1.8rem;
  border-radius: 1.8rem;
  font-weight: 800;
  /* letter-spacing: 3.9px; */

  ${({ variant }) => variant && variantCSS[variant]}
  ${({ shape }) => shape && shapeCSS[shape]};
`;
