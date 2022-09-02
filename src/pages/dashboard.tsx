import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

import { Header } from "../components/Header/index";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled:false,
  },
  xaxis: {
    type:'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-04-08T00:00:00.000Z',
      '2022-04-09T00:00:00.000Z',
      '2022-04-10T00:00:00.000Z',
      '2022-04-11T00:00:00.000Z',
      '2022-04-12T00:00:00.000Z',
      '2022-04-13T00:00:00.000Z',
      '2022-04-14T00:00:00.000Z', 
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  },
};

const series = [
  {
    name: 'series1',
    data:[22, 48, 16, 73, 34, 50, 81],
  }
];

export default function Dashboard() {
  return(
    <Flex direction="column" h="100vh">
      <Header /> 

      <Flex 
        w="100%" 
        my="6" 
        maxWidth={1480} 
        mx="auto" 
        px="6"
      >
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" > 
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          > 
            <Text fontSize="lg" mb="4">
              Subscriptions in this week
            </Text>
            <Chart options={options} series={series} type="area" height={160} width={500} />
          </Box>

          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
          > 
            <Text fontSize="lg" mb="4">
              Opening tax
            </Text>
            <Chart options={options} series={series} type="area" height={160} width={500} />
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  );
} 