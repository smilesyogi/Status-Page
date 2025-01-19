import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Maintenance() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Maintenance</h1>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Database Upgrade</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Scheduled for 2:00 AM UTC</p>
            <Badge variant="outline" className="mt-2">
              Upcoming
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
