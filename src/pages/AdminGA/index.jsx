import React from 'react';
import { CommonChart } from '../../components';
import AdminLayout from '../../layouts/AdminLayout';
import { purchase_item, purchase_brand, click_item, click_brand } from './data';
import {
  ContentWrapper,
  Title,
  GridContainer,
  ChartWrapper,
  ChartTitle,
} from './styled';
import { colors } from '../../styles/colors';

const AdminGA = () => {
  return (
    <AdminLayout>
      <ContentWrapper>
        <Title>모아모아타운 의류상품 선호도</Title>
        <GridContainer>
          <ChartWrapper>
            <ChartTitle>구매 상품</ChartTitle>
            <CommonChart
              data={purchase_item}
              xKey='item_name'
              yKey='count'
              xLabel='Item Name'
              colors={colors.green}
            />
          </ChartWrapper>

          <ChartWrapper>
            <ChartTitle>구매 브랜드</ChartTitle>
            <CommonChart
              data={purchase_brand}
              xKey='item_brand'
              yKey='count'
              xLabel='Brand Name'
              colors={colors.orange}
            />
          </ChartWrapper>
          <ChartWrapper>
            <ChartTitle>클릭 상품</ChartTitle>
            <CommonChart
              data={click_item}
              xKey='item_name'
              yKey='count'
              xLabel='Item Name'
              colors={colors.green}
            />
          </ChartWrapper>
          <ChartWrapper>
            <ChartTitle>클릭 브랜드</ChartTitle>
            <CommonChart
              data={click_brand}
              xKey='item_brand'
              yKey='count'
              xLabel='Brand Name'
              colors={colors.orange}
            />
          </ChartWrapper>
        </GridContainer>
      </ContentWrapper>
    </AdminLayout>
  );
};

export default AdminGA;
