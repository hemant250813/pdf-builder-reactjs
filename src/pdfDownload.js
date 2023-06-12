import React, { useRef } from "react";
import {
  PDFViewer,
  PDFDownloadLink,
  Page,
  Text,
  Image,
  Link,
  View,
  Document,
  StyleSheet
} from "@react-pdf/renderer";
import html2canvas from "html2canvas";

import axios from "axios";


const PdfDocument = ({ formData }) => {

  
  return (
    <Document>
      <Page size="A4" style={styles.page}>
     
        <View style={styles.section}>
          
          <Text style={styles.heading}>HEMANT MEENA</Text>

        
          {Object.keys(formData).map((key) => (

            <Text  key={key} style={styles.field} >
              <Text style={styles.label}>{key}: </Text>
             
              <Text>{formData[key]}</Text>
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const PdfDownload = ({ formData }) => {
  const pdfRef = useRef(null);

  const handleDownloadPdf = () => {
    if (pdfRef.current) {
      html2canvas(pdfRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("form.pdf");
      });
    }
  };

  return (
    <div>
      <h2>Form Data PDF</h2>
      <PDFViewer style={styles.pdfViewer}>
        <PdfDocument formData={formData} />
      </PDFViewer>
      <PDFDownloadLink
        document={<PdfDocument formData={formData} />}
        fileName="form.pdf"
      >
        {({ loading }) => (loading ? "Loading..." : "Download PDF")}
      </PDFDownloadLink>
      <button onClick={handleDownloadPdf}>Download PDF (Alternative)</button>
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 12,
    padding: 20,

  },
  section: {
    margin: 10,

  },
  name: {
    fontSize: 24,
    fontFamily: 'Lato Bold',
  },
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf : "center"

  

  },
  image : {
    marginBottom: 10
  },
objective: {
color : 'red'
},
  field: {
    marginBottom: 5,

  },
  label: {
    fontWeight: "bold",
    color : 'red'
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  pdfViewer: {
    width: "100%",
    height: "600px",
    marginBottom: "10px"
  }
});

export default PdfDownload;
