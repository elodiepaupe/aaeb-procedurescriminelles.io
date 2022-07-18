<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    xmlns:alto="http://www.loc.gov/standards/alto/ns-v4#"
    xpath-default-namespace="http://www.loc.gov/standards/alto/ns-v4#" 
    version="2.0"
    exclude-result-prefixes="xs">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    
    <xsl:strip-space elements="*"/>
    
    <xsl:template match="/">
        
        <html lang="fr">
            <head>
                <title>Projet Crimes et Châtiments</title>
                <link rel="stylesheet" href="style/feuilledestyle.css"/> 
                <meta charset="UTF-8"/>
                <meta name="keywords" content="HTML, CSS, JavaScript"/>
                <meta name="description" content="Free Web tutorials"/>
                <meta name="author" content="John Doe"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
            </head>
            
            <body>
                <xsl:apply-templates select="//String"/>
                    
            </body>
        </html>
        
    </xsl:template>
    
    <xsl:template match="String">
        <xsl:for-each select="@CONTENT">
            
            <xsl:value-of select="."/><br/>
        </xsl:for-each>
    </xsl:template>
    
</xsl:stylesheet>