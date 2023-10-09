import { Card, Flex, Text, ProgressBar, Legend } from "@tremor/react";

function Progress() {
  return (
    <Card className="max-w-lg mt-3">
      <h1 className="text-white text-lg mb-4">Sales Progress</h1>
    <Flex>
      <Text>$ 9,012 &bull; 75%</Text>
      <Text>$ 40,000</Text>
    </Flex>
    <ProgressBar value={75} color="green" className="mt-3 mb-4" />
    <Flex>
      <Text>$ 19,012 &bull; 5%</Text>
      <Text>$ 23,000</Text>
    </Flex>
    <ProgressBar value={5} color="red" className="mt-3 mb-4" />
    <Flex>
      <Text>$ 24,012 &bull; 95%</Text>
      <Text>$ 54,000</Text>
    </Flex>
    <ProgressBar value={95} color="green" className="mt-3 mb-4" />
    <Flex>
      <Text>$ 55,012 &bull; 25%</Text>
      <Text>$ 28,000</Text>
    </Flex>
    <ProgressBar value={25} color="orange" className="mt-3 mb-4" />
    
    <Legend
      className="mt-3"
      categories={["Bad", "Average","Good"]}
      colors={[ "red", "orange","green"]}
    />
  </Card>
  )
}

export default Progress
