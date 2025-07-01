import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";


export default function Dashboard({ telegramId }) {
  const [videos, setVideos] = useState([]);
  const [payments, setPayments] = useState([]);
  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    if (!telegramId) return;
    fetch(`/api/user/videos?telegramId=${telegramId}`, {
      headers: { 'ngrok-skip-browser-warning': 'true' }
    })
      .then(res => res.json())
      .then(setVideos);
    fetch(`/api/payments?telegramId=${telegramId}`, {
      headers: { 'ngrok-skip-browser-warning': 'true' }
    })
      .then(res => res.json())
      .then(setPayments);
    if (telegramId === '123456789') {
      fetch(`/api/admin/users?telegramId=${telegramId}`, {
        headers: { 'ngrok-skip-browser-warning': 'true' }
      })
        .then(res => res.json())
        .then(setAdminUsers);
    }
  }, [telegramId]);

  return (
    <div className="min-h-screen bg-light text-black font-suisse p-6 space-y-6">
      <h1 className="text-4xl font-bold drop-shadow-[0_0_5px_rgba(255,0,80,0.5)]">
        GustavoLab Dashboard
      </h1>

      <Tabs defaultValue="dashboard">
        <TabsList className="bg-surface rounded-md p-1 shadow-neon">
          <TabsTrigger value="dashboard" className="text-black hover:text-accent">Dashboard</TabsTrigger>
          <TabsTrigger value="payments" className="text-black hover:text-accent">Payments</TabsTrigger>
          {telegramId === '123456789' && (
            <TabsTrigger value="admin" className="text-black hover:text-accent">Admin</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="dashboard">
          <Card className="bg-surface shadow-neon">
            <CardContent className="p-6 space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p className="text-lg mb-2">Videos Uploaded: {videos.length}</p>
              </div>
              <div className="overflow-x-auto">
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
                    {videos.map(v => (
                      <tr key={v.id} className="border-t border-gray-300">
                        <td className="p-2">{v.date}</td>
                        <td className="p-2">{v.campaign}</td>
                        <td className="p-2 text-blue-400 underline">{v.link}</td>
                        <td className="p-2">{v.views}</td>
                        <td className="p-2">{v.cpm}</td>
                        <td className="p-2">{v.earnings}</td>
                        <td className="p-2">{v.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payments">
          <Card className="bg-surface shadow-neon">
            <CardContent className="p-6 space-y-6">
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
                    {payments.map(p => (
                      <tr key={p.id} className="border-t border-gray-300">
                        <td className="p-2">{p.date}</td>
                        <td className="p-2">{p.method}</td>
                        <td className="p-2">{p.amount}</td>
                        <td className="p-2">{p.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {telegramId === '123456789' && (
          <TabsContent value="admin">
            <Card className="bg-surface shadow-neon">
              <CardContent className="p-6 overflow-x-auto">
                <h2 className="text-2xl font-semibold mb-4">All Users</h2>
                <table className="min-w-full text-sm">
                  <thead className="text-left text-gray-600">
                    <tr>
                      <th className="p-2">User ID</th>
                      <th className="p-2">Videos</th>
                    </tr>
                  </thead>
                  <tbody className="text-black">
                    {adminUsers.map(u => (
                      <tr key={u.id} className="border-t border-gray-300">
                        <td className="p-2">{u.id}</td>
                        <td className="p-2">{u.videos.length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
