import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet, Line , Image, Li} from '@react-pdf/renderer';
import  { useState, useEffect } from 'react';
import axios from 'axios';


 



const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: '1cm',
  },
  logo: {
    width: '10%',
   //height: '10%',
  },
  heading: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: '0.5cm',
    color: 'red',
  },
  bold:{
    fontWeight : 'extrabold',
    fontSize : '12',

  },
  subtitle: {
    
    fontSize: 11,
    marginBottom: '0.3cm',
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderCollapse: 'collapse',
    marginBottom: '1cm',
  },
  tableRow: {
    fontSize: 12,
    flexDirection: 'row',
  },
  tableCell: {
    fontSize: 12,
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: '0.3cm',
  },
  tableCells: {
    fontWeight : 'extrabold',
    fontSize: 14,
    width: '50%',
    borderStyle: 'solid',
    borderWidth: 1,
    padding: '0.3cm',

  },
  section: {
    marginBottom: '1cm',
    
  },
  header1: {
    marginBottom: '1cm',
    borderBottom: '2px',
    borderBottomColor: 'grey'
    
  },
  name:{
    fontSize: 14,
    fontWeight: 'ultrabold',
    marginBottom: '0.5cm',
    
    textAlign : 'center'

  },
  designation:{

    fontSize: 11,
  
    fontStyle : 'italic', 
    marginBottom: '0.5cm',
    textAlign : 'center'

  },
  endtop: {
    position : 'absolute',
    fontSize : 11 ,
    textAlign : 'right',
    left : '65%',
    top: '5%'
    
    
  },
  end2top: {
    position : 'absolute',
    fontSize : 11 ,
    textAlign : 'right',
    left : '65%',
    top : '52%'
  }
});

const Resume = () => {

  const imageUrl = 'http://localhost:3001/pngimage.png'
  
  //const imageUrl = 'https://conneqtdigital.in/wp-content/uploads/2022/10/logoc.png'
  const [userData, setUserData] = useState({}); // State to hold user data

  useEffect(() => {
    // Fetch user details from the API
    axios.get('http://localhost:8000/api/fetch-user-details' 
     
    
    )
      .then(response => {
        
        setUserData(response.data); // Update user data state with the retrieved data
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once

  
  const ResumeDocument = () => (

   
    <Document>
      <Page size="A4" style={styles.page}>
       
        <View style={styles.header1}>
        <Image style={styles.logo} src={imageUrl} />
          <Text style={styles.name}>HEMANT MEENA </Text> 
         
          <Text style={styles.designation}>Software Engineer</Text>

          <Text style={styles.endtop}>E-mail: Hemant.meena932@gmail.com</Text>
          <Text style={styles.end2top}>Mobile: +918019882476</Text>
          
         
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Objective:</Text>
          <Text style={styles.subtitle}>
            Software Engineer with 3 years experience in web application development & designing.
            Seeking to leverage my technical and professional expertise to grow in the new role of
            software development engineer at your company.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Summary:</Text>
          <Text style={styles.subtitle}>
            - Having 3.1 years of experience as a Java Developer in developing Web based
            Applications using Java8, J2EE technologies.
            </Text>
            <Text style={styles.subtitle}>
           - Hands on experience to Implementing Rest integrated Spring Boot applications. 
           </Text>
           <Text style={styles.subtitle}>
            - Implemented Micro services Architecture using spring cloud technologies. 
            </Text>
            <Text style={styles.subtitle}>
           - Working Experience on ORM Tool Hibernate. </Text>
            <Text style={styles.subtitle}>
           - Have Experience in Using GIT for code repository and as version control mechanism. 
            </Text>
            <Text style={styles.subtitle}>
           - Have a good Experience in Builder Design Pattern and Factory Design pattern.  
            {/* Include the rest of the summary */}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Academic Qualifications:</Text>
          <Text style={styles.bold}>
         BACHELOR OF ENGINEERING in Computer Science (BE) 2020
         </Text>
         <Text style={styles.subtitle}>
         Bachelor of Technology from JNTUK University.
          </Text>
          </View>
          <View style={styles.section}>
          <Text style={styles.heading}>Skills: </Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCells}>
                <Text>Programming Languages</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Java 8 & NodeJs</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCells}>
                <Text>Technology</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>JDBC</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCells}>
                <Text>Framework Software</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Spring boot, Spring, Hibernate (ORM), Microservices</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCells}>
                <Text>ORM Software</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Rally (Formerly CA Agile Central), JIRA, Digital Agile</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCells}>
                <Text>Web Frontend Languages</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>HTML, CSS, Javascript, jQuery</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCells}>
                <Text>Databases</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>My SQL</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCells}>
                <Text>Servers</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Tomcat</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCells}>
                <Text>IDE</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Eclipse, STS, Postman</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCells}>
                <Text>Build Tools</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Maven</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCells}>
                <Text>OS</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Windows</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Project Experience </Text>
        <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>Project Name</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>TFT (This For That)</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>Description</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>
                  TFT is a place for like-minded women to share their closets, tastes. It is the most environment-friendly way to shop. You can use this application platform to exchange, swap clothes, shoes, bags, cosmetic accessories, kid's products, and seek feedback or help from the community. Customers can upload pictures of their items to their profiles.
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>Tools & Technologies</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Java, Spring Boot, Microservices, Hibernate, Rest API, JPA, Git, Log4J, Java 8</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>Duration</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>2020 Mar - July 2022</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>Role</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Backend Developer</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>Responsibilities</Text>
              </View>
              <View style={styles.tableCell}>
                <Text> -  Configured cloud servers like Eureka server, Config server. </Text>
                <Text>-  Involved in developing Rest Controller classes using Spring 
Boot with Maven.  </Text>
<Text>- Implemented Service classes where the business logic exists. </Text>
<Text>- Implemented Repository and DAO Interface by 
using JPA repository and Spring Dao with Hibernate.  </Text>
<Text>-  Integrated many micro services Rest services.  </Text>
<Text>-  Involved in writing APIs like TXT, PDF, XLXS, DOCX and ZIP. </Text> 
<Text>-  Used Log4J for debugging the application and to know the 
flow of the application.  </Text>
<Text>-  Implemented Filters like Equals, Not equals, Contains, Not 
contains etc. </Text> 
<Text>-  Implemented Factory Design Pattern.  </Text>
<Text>- Capable of working with multiple schemas.  </Text>
<Text>- Implemented File Upload and Download functionality. </Text> 
<Text>- Good to work with code repositories like Git. </Text>
              </View>
            </View>
          </View>
          </View>

          <View style={styles.section}>
          <Text style={styles.heading}>Declaration:</Text>
          <Text style={styles.subtitle}>
          I hereby declare that the above-mentioned information is correct up to my knowledge and I bear 
the responsibility for the correctness of the above-mentioned particulars. 

          </Text>
        </View>

        <View style={styles.section}>
          
          <Text style={styles.subtitle}>
          DATE: 25/5/2023

          </Text>
        </View>

        <View style={styles.section}>
          
          <Text style={styles.subtitle}>
          PLACE:  BANGALORE

          </Text>
        </View>
        {/* Include the rest of the resume sections (Academic Qualifications, Skills, Project Experience, Declaration) */}
      </Page>
    </Document>
  );

  return (
    <div className="resume">
      <h1>Resume</h1>
      <PDFDownloadLink document={<ResumeDocument />} fileName="resume.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Generating PDF...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Resume;
