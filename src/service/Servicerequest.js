
export default async function getdata() {
    var data1 = [];
    await fetch(
      "http://ehr.iradreports.com/hapi-fhir-jpaserver/fhir/ServiceRequest" )
      .then((d) => d.json())
      .then((data) => {
        
        
        for (var i = 0; i < data.entry.length; i++) {
          const dateString = data?.entry[i]?.resource?.meta.lastUpdated;
          const date = new Date(dateString);

          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();

          const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${
            day < 10 ? "0" : ""
          }${day}`;
          data1.push({
            id: data?.entry[i]?.resource?.id,
            servicerequest:
              data?.entry[i]?.resource?.code?.coding[0]?.display||"empty",
            status: data?.entry[i]?.resource?.status,
            bodysite: data.entry[i].resource.orderDetail[0].coding[0].display,
            priority: data?.entry[i]?.resource?.priority,
            time: formattedDate,
            reason: data?.entry[i]?.resource?.note[0]?.text,
          });
        }
      });
      return data1;
  }

