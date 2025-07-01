import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";


export default function Dashboard() {
  return (
    <div className="min-h-screen bg-light text-black font-suisse p-6 space-y-6">
      <h1 className="text-4xl font-bold drop-shadow-[0_0_5px_rgba(255,0,80,0.5)]">
        GustavoLab Dashboard
      </h1>

      <Tabs defaultValue="dashboard">
        <TabsList className="bg-surface rounded-md p-1 shadow-neon">
          <TabsTrigger value="dashboard" className="text-black hover:text-accent">Dashboard</TabsTrigger>
          <TabsTrigger value="channels" className="text-black hover:text-accent">My Channels</TabsTrigger>
          <TabsTrigger value="videos" className="text-black hover:text-accent">Videos</TabsTrigger>
          <TabsTrigger value="reports" className="text-black hover:text-accent">Reports</TabsTrigger>
          <TabsTrigger value="payments" className="text-black hover:text-accent">Payments</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card className="bg-surface shadow-neon">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-lg mb-2">Total Earnings: <span className="text-[#FF0040]">$2,450.00</span></p>
              <p className="text-lg mb-2">Videos Uploaded: 120</p>
              <p className="text-lg">Total Views: 1.2M</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="channels">
          <Card className="bg-surface shadow-neon">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">YouTube Channels</h2>
              <Button className="bg-[#FF0040] hover:bg-[#e60036] text-white">Link New Channel</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="videos">
          <Card className="bg-surface shadow-neon">
            <CardContent className="p-6 overflow-x-auto">
              <h2 className="text-2xl font-semibold mb-4">Uploaded Videos</h2>
              <table className="min-w-full text-sm">
                <thead className="text-left text-gray-600">
                  <tr>
                    <th className="p-2">Date</th>
                    <th className="p-2">Campaign</th>
                    <th className="p-2">Link</th>
                    <th className="p-2">Views</th>
                    <th className="p-2">CPM</th>
                    <th className="p-2">Earnings</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  <tr className="border-t border-gray-300">
                    <td className="p-2">Jun 23, 2025</td>
                    <td className="p-2">ReBet</td>
                    <td className="p-2 text-blue-400 underline">Instagram</td>
                    <td className="p-2">676.8K</td>
                    <td className="p-2">$0.30</td>
                    <td className="p-2">$203.03</td>
                    <td className="p-2 text-red-500">Botted</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports">
          <Card className="bg-surface shadow-neon">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Reports</h2>
              <Button className="bg-[#FF0040] hover:bg-[#e60036] text-white">Download CSV</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card className="bg-surface shadow-neon">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">Available Payout Balance</h2>
                  <p className="text-2xl text-[#FF0040] font-bold">$4.92</p>
                </div>
                <div className="space-x-2">
                  <Button className="bg-gray-300 text-black">Edit Payout Method</Button>
                  <Button className="bg-[#FF0040] text-white">Payout</Button>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Payout History & Status</h3>
              <table className="min-w-full text-sm">
                <thead className="text-left text-gray-600">
                    <tr>
                      <th className="p-2">Date</th>
                      <th className="p-2">Method</th>
                      <th className="p-2">Amount Submitted</th>
                      <th className="p-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-black">
                    <tr className="border-t border-gray-300">
                      <td className="p-2">Jun 30, 2025</td>
                      <td className="p-2">Wire Transfer</td>
                      <td className="p-2 text-red-400">-$607.15</td>
                      <td className="p-2 text-yellow-400">Awaiting Approval</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
