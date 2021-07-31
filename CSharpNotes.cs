using System;
using System.IO;

namespace SampleConsoleApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            string fileContent = ReadFile("sampletext.txt");

            Console.WriteLine(fileContent);

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
