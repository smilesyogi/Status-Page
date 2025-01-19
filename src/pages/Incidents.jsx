import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Incidents() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Incidents</h1>

      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Service Outage</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Description of the incident...</p>
            <Badge variant="outline" className="mt-2">
              Ongoing
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Database Degraded</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Description of the incident...</p>
            <Badge variant="outline" className="mt-2">
              Resolved
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
