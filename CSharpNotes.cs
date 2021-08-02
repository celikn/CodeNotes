using System;
using System.IO;

namespace SampleConsoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            string fileContent = ReadFile("sampletext.txt");

            Console.WriteLine("Before----------");

            Console.WriteLine(fileContent);

            WriteFile("sampletext.txt", "TextToWrite");

            // read again after writing a text
            fileContent = ReadFile("sampletext.txt");
            Console.WriteLine("After----------");
            Console.WriteLine(fileContent);
        }


        public static void WriteFile(string FileName,string TextToWrite,bool continueWriting=true)
        {
            try
            {
                //Pass the filepath and filename to the StreamWriter Construct

                if (!File.Exists(FileName))
                {

                    StreamWriter sw = new StreamWriter(FileName, false);
                    sw.WriteLine(TextToWrite);
                    //Close the file
                    sw.Close();


                }
                else if (File.Exists(FileName))
                {

                    StreamWriter sw = new StreamWriter(FileName, true);
                    //Write a line of text
                    sw.WriteLine(TextToWrite);
                    //Close the file
                    sw.Close();


                }
                



            }
            catch (Exception e)
            {
                Console.WriteLine("Exception: " + e.Message);
            }
            finally
            {
                Console.WriteLine("Executing finally block.");
            }


        }



        public static string ReadFile(string FileName)
        {
            try
            {
                using (StreamReader reader = File.OpenText(FileName))
                {
                    string fileContent = reader.ReadToEnd();
                    if (fileContent != null && fileContent != "")
                    {
                        return fileContent;
                    }
                }
            }
            catch (Exception ex)
            {
                //Log
                throw ex;
            }
            return null;
        }


    }
}
